-- Create Notes Table
create table public.notes (
    id uuid default gen_random_uuid() primary key,
    content text not null,
    user_id uuid references auth.users(id) on delete cascade not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.notes enable row level security;

-- Create policies for row level security
create policy "Users can create their own notes"
    on public.notes
    for insert
    with check (auth.uid() = user_id);

create policy "Users can view their own notes"
    on public.notes
    for select
    using (auth.uid() = user_id);

create policy "Users can update their own notes"
    on public.notes
    for update
    using (auth.uid() = user_id);

create policy "Users can delete their own notes"
    on public.notes
    for delete
    using (auth.uid() = user_id);

-- Create updated_at trigger
create or replace function public.handle_updated_at()
returns trigger as $$
begin
    new.updated_at = now();
    return new;
end;
$$ language plpgsql;

create trigger handle_notes_updated_at
    before update on public.notes
    for each row
    execute function public.handle_updated_at();