<div align="center">
<h1>Text to Base64 Encoder/Decoder</h1>

![GitHub](https://img.shields.io/github/license/ruihq/text-to-base64)
![GitHub Workflow Status (with branch)](https://img.shields.io/badge/build-passing-brightgreen)
[![Contributors](https://img.shields.io/badge/Contributors-4-brightgreen?style=flat)](CONTRIBUTORS.md)
[![Code of Conduct](https://img.shields.io/badge/%E2%9D%A4%EF%B8%8F-CODE%20OF%20CONDUCT-brightgreen)](https://github.com/ruihq/text-to-base64/blob/main/CODE_OF_CONDUCT.md)
![BWS](https://img.shields.io/badge/-Built%20With%20Swag-brightgreen)

This is a Python script that can encode or decode a string of text to/from its equivalent base64 representation.

## Usage

To use this script, simply run it from the command line. You will be prompted to choose whether you want to encode or decode a text. If you choose to encode, you will then be prompted to enter the text you want to encode. The script will then print the base64 encoded string of the entered text. If you choose to decode, you will be prompted to enter the base64 encoded text you want to decode. The script will then print the decoded string of the entered text.

Other use is to Use the web version!

[Live](https://ruihq.github.io/text-to-base64/)

## Example

Here's an example of how to use the script to encode a text:

```
python3 encoder.py
Enter 'e' to encode or 'd' to decode: d
Enter the base64-encoded text to decode: SGVsbG8gV29ybGQh
Hello World!
```

In the first example, the script was run and the user chose to encode a text. The user entered `"Hello World!"` as the text to encode. The script then printed the base64 encoded string `"SGVsbG8gV29ybGQh"`.

In the second example, the script was run and the user chose to decode a text. The user entered `"SGVsbG8gV29ybGQh"` as the base64 encoded text to decode. The script then printed the decoded string `"Hello World!"`.

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
</div>
