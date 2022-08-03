package src.ResponseToFile;

import java.io.File;
import java.io.InputStream;
import java.io.PrintWriter;
import java.net.URL;
import java.net.URLConnection;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Map;

public class Response 
{
  public static void writeResponseToFile (URL url, File outputFile)
  {
    try 
    {
      PrintWriter printWriter = new PrintWriter(outputFile);
      URLConnection urlConnection = url.openConnection();

      Map<String,List<String>> headers = urlConnection.getHeaderFields();
      printWriter.println("headers:");
      for (Map.Entry<String, List<String>> entry : headers.entrySet()) 
        printWriter.println(entry.getKey() + ": " + entry.getValue());

      InputStream inputStream = urlConnection.getInputStream();
      byte[] byteBuffer = new byte[inputStream.available()];

      if (inputStream.read(byteBuffer) != -1)
      {
        char[] charBuffer = new String(byteBuffer, StandardCharsets.UTF_8).toCharArray();
        String content = new String(charBuffer);
        printWriter.println("\ncontent:\n" + content);
      }
      printWriter.close();
    }
    catch (Exception e) {
      System.out.println(e + "");
    }
  }
}
