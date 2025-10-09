CREATE TABLE scores (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  score INT,
  game_type TEXT, 
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE scores ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can insert their own scores." ON scores FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can view their own scores." ON scores FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Allow authenticated users to insert data" ON scores FOR INSERT TO authenticated WITH CHECK (true);

CREATE TABLE progress(
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  video_id TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, video_id) 
);

ALTER TABLE progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their own progress." ON progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own progress." ON progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Allow authenticated users to insert data" ON progress FOR INSERT TO authenticated WITH CHECK (true);
