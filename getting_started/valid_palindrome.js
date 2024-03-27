/**
 * Problem taken from https://leetcode.com/problems/valid-palindrome/
 * @param {string} s Input string. Contains all types of characters.
 * @return {boolean} Determine if s is a palindrome.
 */
var isPalindrome = function(s) {

	// Ignore characters that are not alphanumeric.
	// So, keep: A-Z, a-z, 0-9
    let processed = "";
    for (let i = 0; i < s.length; i++) {
        if ((s.charAt(i) >= 'A' && s.charAt(i) <= 'Z')				// Capital letters
				|| (s.charAt(i) >= 'a' && s.charAt(i) <= 'z')		// Lowercase letterrs
				|| (s.charAt(i) >= '0' && s.charAt(i) <= '9')) {	// Numbers

            processed = processed + s.charAt(i).toLowerCase();
        }
    }

	// Check to see if the processed string is a palindrome
    for (let i = 0; i <= Math.trunc(processed.length / 2); i++) {
		// Check front to back and back to front, until you hit the middle
        if (processed.charAt(i) !== processed.charAt(processed.length - 1 - i)) {
			// If there is not a match, go ahead and return
            return false;
        }
    }

	// If the program makes it to this point, that means that a palindrome was found
    return true;
};