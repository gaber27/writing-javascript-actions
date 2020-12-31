package gago;
import java.util.Scanner;
public class Gago {
    public static void main(String[] args) 
    {
       Scanner gago = new Scanner(System.in);
       String name;
       System.out.println("Dear,Enter your name");
       name = gago.next();
       System.out.println("Happy new year" + name);
    int number;
    System.out.println("Enter number from 1 to 10");
    number = gago.nextInt();
        switch (number) {
            case 1:
                System.out.println(" صلي ع النبي");
                break;
            case 2:
                System.out.println("سنة سعيده عليك وعلي امك ههه");
                break;
            case 3:
                System.out.println("حافظ ع ام التباعد اميل علي رجل امك ابوسها ابعد عني مش عايز اذيك");
                break;
            case 4 :
                System.out.println("دعوه حلوة زيك لاخوك جابر");
                break;
            case 5 :
                System.out.println("لا دي خمسه فعينك عشان لو مصلتش ع النبي نيهه");
                break;
            case 6 :
                System.out.println(" باذن الله هتكون سنه احسن من الي عدت متبوذ انت بس يابن النكديه");
                break;
            case 7 :
                System.out.println("دعوه لابويا وامي بئا ");
                break;
            case 8 :
               System.out.println("لا شوفلك رقم تاني دي لاحلي مهندسه عقبال كل سنه اصاحبتي");
                break;
            case 9 :
                System.out.println("بحر مسا ع عيونك وعقبال كل سنه");
                break;
            case 10 :
                System.out.println("لا انا جضيت كفايه نيهه");
                default :
        System.out.println("ولاا متتحنيكش اختار من واحد لعشره بالانجليش ");
        }
