package eu.nets.portal.traning.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest")
public class StartController {
    
    @RequestMapping(value = "/greeting", produces = "text/plain")
    public ResponseEntity<String>  index() {
        return ResponseEntity.ok("Greetings from Spring Boot!");
    }
    
}
