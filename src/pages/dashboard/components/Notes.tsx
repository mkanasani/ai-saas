import React, { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabase';
import { useAuthStore } from '../../../store/authStore';
import { Button } from '../../../components/ui/Button';
import { PlusCircle, Trash2, Save } from 'lucide-react';

interface Note {
  id: string;
  content: string;
  created_at: string;
  user_id: string;
}

export const Notes: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useAuthStore();

  useEffect(() => {
    if (user) {
      fetchNotes();
    }
  }, [user]);

  const fetchNotes = async () => {
    try {
      const { data, error } = await supabase
        .from('notes')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setNotes(data || []);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const handleSaveNote = async () => {
    if (!newNote.trim() || !user) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from('notes')
        .insert([
          {
            content: newNote,
            user_id: user.id,
          },
        ]);

      if (error) throw error;

      setNewNote('');
      fetchNotes();
    } catch (error) {
      console.error('Error saving note:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteNote = async (id: string) => {
    try {
      const { error } = await supabase
        .from('notes')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setNotes(notes.filter(note => note.id !== id));
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div className="space-y-6">
      {/* New Note Input */}
      <div className="space-y-4">
        <textarea
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Enter your note here..."
          className="cyber-input min-h-[100px] resize-none"
        />
        <Button
          onClick={handleSaveNote}
          disabled={loading || !newNote.trim()}
          className="w-full flex items-center justify-center gap-2"
        >
          {loading ? (
            'Saving...'
          ) : (
            <>
              <PlusCircle className="w-4 h-4" />
              Add Note
            </>
          )}
        </Button>
      </div>

      {/* Notes List */}
      <div className="space-y-4">
        {notes.map((note) => (
          <div
            key={note.id}
            className="cyber-container p-4 group hover:border-cyan-400/50 transition-all duration-300"
          >
            <div className="flex justify-between items-start gap-4">
              <p className="text-cyan-400/90 whitespace-pre-wrap flex-1">
                {note.content}
              </p>
              <button
                onClick={() => handleDeleteNote(note.id)}
                className="text-cyan-400/50 hover:text-cyan-400 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-2 text-xs text-cyan-400/50">
              {new Date(note.created_at).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};