import sounddevice as sd
from scipy.io.wavfile import write

class registeraudio:    
    def register(id, duree):
        fe = fs = int(sd.query_devices(10, 'input')['default_samplerate']) 
        name = f"{id}.mp3"
        sd.default.device = (10, None)
        audio = sd.rec(int(duree*fe), samplerate=fe, channels=1, device=10)
        sd.wait()
        write(name, fe, audio)