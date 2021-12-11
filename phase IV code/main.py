from twisted.web import server, resource
from twisted.internet import reactor
class HelloResource(resource.Resource):
    isLeaf = True
    numberRequests = 0 # keep track in a global number
    def render_GET(self, request): # create a callback
        self.numberRequests += 1 # add one to the global number
        request.setHeader("content-type", "text/plain")
        return "Now Serving:" + str(self.numberRequests) + "\n"
print 'connect a web browser to port 3178'
reactor.listenTCP(3178, server.Site(HelloResource()))
reactor.run() # connect port to callback above

