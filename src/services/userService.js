import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rxegtsqrqjnunalqhqnp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4ZWd0c3FycWpudW5hbHFocW5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5OTQ4MTAsImV4cCI6MjA1MzU3MDgxMH0.SH61MHxcW7du1fqyglnt7ub-It0rIjCe89qjyy0M-uQ';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function signUpUser(email, password) {
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) throw error;
  return user;
}

export async function signInUser(email, password) {
  const { user, error } = await supabase.auth.signIn({
    email,
    password,
  });
  if (error) throw error;
  return user;
}

export async function getUserData(userId) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single();
  if (error) throw error;
  return data;
}

export async function updateUserData(userId, updates) {
  const { data, error } = await supabase
    .from('users')
    .update(updates)
    .eq('id', userId);
  if (error) throw error;
  return data;
}

export async function deleteUser(userId) {
  const { data, error } = await supabase
    .from('users')
    .delete()
    .eq('id', userId);
  if (error) throw error;
  return data;
}