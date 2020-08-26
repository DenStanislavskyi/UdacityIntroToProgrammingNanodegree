import time
import webbrowser
breaks = 0
total_breaks = 3
print("the program started on: " + time.ctime())
while (breaks < total_breaks):
    time.sleep(10)
    webbrowser.open("http://www.youtube.com/watch?v=dQw4w9WgXcQ")
    breaks += 1