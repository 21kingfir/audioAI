const Database = require(`better-sqlite3`);
const fs = require(`fs`);
const zlib = require(`zlib`);

function createdb() {
  const db = new Database(``);
  db.prepare(
    `
    CREATE TABLE IF NOT EXISTS sessions (
        session_name TEXT,
        session_id PRIMARY KEY AUTOINCREMENT,
        started_at INT NOT NULL,
        ended_at INT,
        duration_seconds INT,
        audio_byted_content TEXT,
        metadata TEXT,
        created_at INT,
        updated_at INT
    )`,
  ).run();
}

function addelementtodb(
  db,
  session_name,
  started_at,
  audio_speaker,
  filepath,
  metadata,
  created_at,
) {
  const updated_at = Date.now();
  const bytedfile = fs.readFileSync(filepath);
  const cbytedfile = zlib.gzipSync(bytedfile);
  const b64file = bytedfile.toString(`base64`);
  const request = db.prepare(`
        INSERT INTO sessions (
            session_name, 
            started_at, 
            ended_at, 
            audio_speaker, 
            audio_byted_content, 
            metadata, 
            created_at, 
            updated_at 
            ) VALUES ( ?, 
            ?, 
            ?, 
            ?, 
            ?, 
            ?,
            ?,
            ?)`,
    )
    .run(
      session_name,
      started_at,
      started_at + 5,
      audio_speaker,
      b64file,
      metadata,
      created_at,
      updated_at,
    );
}

module.exports = { createdb, addelementtodb }