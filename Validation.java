public class Validation{

    public static boolean isValidUsername(String username) {
        if (username == null) {
            return false;
        }

        return username.trim().length() >= 3;
    }

    public static boolean isValidEmail(String email) {
        if (email == null) {
            return false;
        }

        String trimmed = email.trim();
        return trimmed.contains("@") && trimmed.contains(".");
    }

    public static boolean isValidLoginPassword(String password) {
        if (password == null) {
            return false;
        }

        String trimmed = password.trim();
        boolean hasLetter = false;
        boolean hasDigit = false;

        for (int i = 0; i < trimmed.length(); i++) {
            char ch = trimmed.charAt(i);

            if (Character.isLetter(ch)) {
                hasLetter = true;
            }

            if (Character.isDigit(ch)) {
                hasDigit = true;
            }
        }

        return trimmed.length() >= 6 && hasLetter && hasDigit;
    }

    public static boolean isValidSignupPassword(String password) {
        if (password == null) {
            return false;
        }

        String trimmed = password.trim();
        boolean hasUpper = false;
        boolean hasLower = false;
        boolean hasDigit = false;

        for (int i = 0; i < trimmed.length(); i++) {
            char ch = trimmed.charAt(i);

            if (Character.isUpperCase(ch)) {
                hasUpper = true;
            }

            if (Character.isLowerCase(ch)) {
                hasLower = true;
            }

            if (Character.isDigit(ch)) {
                hasDigit = true;
            }
        }

        return trimmed.length() >= 8 && hasUpper && hasLower && hasDigit;
    }

    public static String validateLogin(String username, String password) {
        if (!isValidUsername(username)) {
            return "Username must be at least 3 characters long.";
        }

        if (!isValidLoginPassword(password)) {
            return "Password must be at least 6 characters and include a number and letter.";
        }

        return "Valid";
    }

    public static String validateSignUp(String username, String email, String password) {
        if (!isValidUsername(username)) {
            return "Username must be at least 3 characters long.";
        }

        if (!isValidEmail(email)) {
            return "Email must contain @ and a valid domain.";
        }

        if (!isValidSignupPassword(password)) {
            return "Password must be at least 8 characters and include uppercase, lowercase, and a number.";
        }

        return "Valid";
    }
}
