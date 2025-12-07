import sounddevice as sd
from scipy.io.wavfile import write

class registeraudio:    
    def register(id):
        fe = 44100
        seconds = 5 
        name = f"../tempaudiofile/{id.idregister}.waw"
        audio = sd.rec(int(seconds*fe), samplerate=fe, channels=1)
        sd.wait()
        write(name, fe, audio)