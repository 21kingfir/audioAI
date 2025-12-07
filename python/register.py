from audioclass import registeraudio
import sys

process = registeraudio
process.register(sys.argv[1])