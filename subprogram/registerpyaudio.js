const exec = require(`child_process`);

function registeraudio(arg) {
  exec(`python3 ../python/register.py ${arg}`, (err, stdout, stderr) => {
    if (stderr) {
      const gereturn = [Date.now, stderr];
      return gereturn;
    }
  });
}

module.exports = { registeraudio };
