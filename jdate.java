import java.time.format.DateTimeFormatter;
import java.time.LocalDateTime;

class jdate {
    public static void main(String[] args) {
        System.out.println(jdate());
    }

    public static String jdate() {
        LocalDateTime now=LocalDateTime.now();
        DateTimeFormatter myFormatter=DateTimeFormatter.ofPattern("M.d.yyyy");
        String formattedDate=myFormatter.format(now);
        return formattedDate;
    }
}
