import java.time.format.DateTimeFormatter;
import java.time.LocalDateTime;

class jdate {
    public static void main(String[] args) {
        LocalDateTime now=LocalDateTime.now();
        DateTimeFormatter myFormatter=DateTimeFormatter.ofPattern("M.d.yyyy");
        String formattedDate=myFormatter.format(now);
        System.out.println(formattedDate);
    }
}
