import 'dart:async';
import 'dart:convert' show JSON, UTF8;
import 'dart:io';

class Api {
  Future<Map<String, dynamic>> _getJson(Uri uri) async {
    final HttpClient _httpClient = new HttpClient();
    try {
      final httpRequest = await _httpClient.getUrl(uri);
      final httpResponse = await httpRequest.close();
      if (httpResponse.statusCode != HttpStatus.OK) {
        return null;
      }
      // The response is sent as a Stream of bytes that we need
      // to convert to a `String`.
      final responseBody = await httpResponse.transform(UTF8.decoder).join();
      // Finally, the string is parsed into a JSON object.
      return JSON.decode(responseBody);
    } on Exception catch (e) {
      print('$e');
      return null;
    }
  }
}

// Example of implementation
Future main() async {
  final String _url = 'flutter.udacity.com';
  final uri = new Uri.https(_url, "/currency");
  final api = new Api();
  final result = await api._getJson(uri);
  print("result is: $result");
}
