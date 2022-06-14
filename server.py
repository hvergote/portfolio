from http.server import BaseHTTPRequestHandler, HTTPServer
import time

hostName = "localhost"
serverPort = 8080

class helloHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()
        with open("index.html", "r") as f:
            html = f.read()
            self.wfile.write(bytes(html, "utf-8"))
        return

def main():
    server = HTTPServer((hostName, serverPort), helloHandler)
    print("Starting server, use <Ctrl-C> to stop")
    server.serve_forever()

if __name__ == '__main__':
    main()