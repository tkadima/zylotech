package problem2;

import java.util.Scanner;

public class XyloHack {

    public static String xyloHack(String input) {
        // parse out the string from the input
        String str = input.substring(1, input.indexOf('.') - 1);
        // parse out the number given in the input
        int num = Integer.parseInt(input.substring(input.indexOf('(') + 1, input.indexOf(')')));

        if (num % 2 == 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    }

    public static void main (String [] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        String [] hackArray = new String[n];
        int i = 0;
        while (i < n) {
            String s = scanner.nextLine();
            if (!s.isEmpty()) {
                hackArray[i] = s;
                i++;
            }
        }
        // standard output, print out all the string
        for (String input : hackArray) {
            System.out.println(xyloHack(input));
        }

    }
}

