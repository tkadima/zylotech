package problem1;

import java.util.Scanner;

/**
 *
 */
public class File {
    String name;
    String content;


    File() {
    }

    File(String name, String content) {
        this.name = name;
        this.content = content;
    }

    /**
     * performs the cmain function of the program
     *
     * @param files an array of files parsed from the user input
     * @return one file with a name that is combination of all the input files
     */
    public File combineFiles(File[] files) {
        StringBuilder combinedName = new StringBuilder();
        StringBuilder combinedContent = new StringBuilder();
        // fileType, will be useful in the final file name
        String fileType = getFileType(files[0].name);

        // iterate through files and concatenate the contents and the names
        for (int i = 0; i < files.length; i++) {

            String fileName = formatName(files[i].name);
            // display in camel case by capitalizing the first letter of each word except for the last one.
            if (i != 0) {
                String firstLetter = fileName.substring(0, 1);
                fileName = firstLetter.toUpperCase() + fileName.substring(1);
            }
            combinedName.append(fileName);
            combinedContent.append(formatContent(files[i].content));
        }

        return new File(combinedName.toString() + "." + fileType, combinedContent.toString());
    }

    /**
     * helper method to get file type for file
     *
     * @param fullFileName name of file including the type in format fileName.xxx
     * @return the file type xxx
     */
    String getFileType(String fullFileName) {
        int index = fullFileName.indexOf(".");
        String fileType = fullFileName.substring(index + 1);

        return fileType;
    }

    /**
     * reformats the filename to make concatenation possible
     *
     * @param fileName name of the file
     * @return the name of the file in lowercase without the file type e.g '.doc'
     */
    String formatName(String fileName) {
        // in order to properly do camel case, it filename needs to be all lowercase to start.
        fileName.toLowerCase();
        // remove the file name type by returning only the part of the string before the '.'
        int dotIndex = fileName.indexOf('.');
        return fileName.substring(0, dotIndex);
    }

    /**
     * reformats the file content to make concatentation possible
     *
     * @param fileContent the content of the file
     * @return the files content without empty lines and dollar signs
     */
    String formatContent(String fileContent) {
        // replace all empty lines. /n signifies next line, an empty line would be
        // created by 2+ /n's in a row
        String filteredContent = fileContent.replaceAll("\n{2,}", "\n");
        filteredContent = filteredContent.replaceAll("\\$", "");
        // to two lines above can be combined into one line but I split it up because they are serving
        // separate purposes
        return filteredContent;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        File[] files = new File[n];
        for (int i = 0; i < n; i++) {
            String name = scanner.next();
            StringBuilder contentSb = new StringBuilder();
            int newLines = 0;
            while (newLines != 3) {
                String content = scanner.nextLine();
                if (content.isEmpty() || content.equals('\n')) {
                    contentSb.append(content);
                    newLines++;
                } else {
                    contentSb.append(content + "\n");
                    newLines = 0;
                }
            }
            files[i] = new File(name, contentSb.toString());
        }
        File f = new File();
        File newFile = f.combineFiles(files);

        // print the new file
        System.out.println(newFile.name);
        System.out.println(newFile.content);

    }
}
