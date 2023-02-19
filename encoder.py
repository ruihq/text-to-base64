import base64

def text_to_base64(text):
    encoded_text = base64.b64encode(text.encode('utf-8'))
    return encoded_text.decode('utf-8')

def base64_to_text(encoded_text):
    decoded_text = base64.b64decode(encoded_text.encode('utf-8'))
    return decoded_text.decode('utf-8')

choice = input("Enter 'e' to encode or 'd' to decode: ")

if choice == 'e':
    text = input("Enter the text to encode: ")
    print(text_to_base64(text))
elif choice == 'd':
    encoded_text = input("Enter the base64-encoded text to decode: ")
    print(base64_to_text(encoded_text))
else:
    print("Invalid choice. Please enter 'e' to encode or 'd' to decode.")

