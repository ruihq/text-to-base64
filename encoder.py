import base64

def text_to_base64(text):
    encoded_text = base64.b64encode(text.encode('utf-8'))
    return encoded_text.decode('utf-8')

text = input("Enter the text to encode: ")
print(text_to_base64(text))
