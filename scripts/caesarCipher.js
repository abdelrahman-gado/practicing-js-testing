// The shift here will be by 13 (ROT13)
function caesarCipher(str) {
    
    if (typeof str !== "string") {
        return null;
    }

    let encryptedStr = "";
    for (let ch of str) {
        if (/[a-zA-Z]/.test(ch)) {
            const chCode = ch.charCodeAt();
            let encryptedCode;
            if (/[a-z]/.test(ch)) {
                encryptedCode =
                  ((chCode + 13 - "a".charCodeAt()) % 26) + "a".charCodeAt(); 
            } else if (/[A-Z]/.test(ch)) {
                encryptedCode =
                  ((chCode + 13 - "A".charCodeAt()) % 26) + "A".charCodeAt(); 
            }

            const encryptedCh = String.fromCharCode(encryptedCode);    
            encryptedStr += encryptedCh;
        
        } else {
            encryptedStr += ch;
        }
    }

    return encryptedStr;
}


export default caesarCipher;