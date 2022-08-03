package src.ResponseToFile;

import static src.ResponseToFile.Response.writeResponseToFile;
import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;

public class Main 
{
  public static void main (String[] args) 
  {
    URL url = null;
    try { url = new URL("https://github.com/manifest.json"); }
    catch (MalformedURLException e) { System.out.println(e + ""); }
    File file = new File("src//ResponseToFile//output.txt");
    writeResponseToFile(url, file);
  }
}
