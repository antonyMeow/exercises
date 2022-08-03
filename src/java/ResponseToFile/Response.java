package java.ResponseToFile;

import java.io.File;
import java.io.InputStream;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;
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
      HttpURLConnection  httpUrlConnection = (HttpURLConnection) url.openConnection();

      String requestMethod = httpUrlConnection.getRequestMethod();
      printWriter.println("Request method: " + requestMethod + "\n");

      printWriter.println("Response headers:");
      Map<String,List<String>> responseHeaders = httpUrlConnection.getHeaderFields();
      for (Map.Entry<String, List<String>> entry : responseHeaders.entrySet())
        printWriter.println("\t" + entry.getKey() + ": " + entry.getValue());

      InputStream inputStream = httpUrlConnection.getInputStream();
      byte[] byteBuffer = new byte[inputStream.available()];

      if (inputStream.read(byteBuffer) != -1)
      {
        char[] charBuffer = new String(byteBuffer, StandardCharsets.UTF_8).toCharArray();
        String content = new String(charBuffer);
        printWriter.println("\nContent:\n" + content);
      }
      printWriter.close();
    }
    catch (Exception e) {
      System.out.println(e + "");
    }
  }
}
