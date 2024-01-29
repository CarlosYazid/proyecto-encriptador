


def desencriptar(text):
    msg = text

    keys = {
        "ai":"a",
        "enter":"e",
        "imes":"i",
        "ober":"o",
        "ufat":"u"
    }

    for i in keys.keys():
        if i in text:
            msg = msg.replace(i, keys[i])
    return msg