import urllib.request as ur
def read_text():
    text = open(r'C:\Users\user\Desktop\courses\urun.txt', encoding="utf8")
    contents_of_file = text.read()
    print(contents_of_file)
    text.close()
    check_profanity(contents_of_file)

def check_profanity(text_to_check):
    connection = ur.urlopen(r"http://www.wdyl.com/profanity?q="+text_to_check)
    output = connection.read()
    #print(output)
    connection.close()
    if "true" in output:
        print("Profanity alert!")
    elif "false":
        print("This dokument has no curse words!")
    else:
        print("Could not scan the document properly.")
read_text()
