package main
import (
    "fmt"
    "net/http"
    "strings"
    "github.com/gin-gonic/gin"
)
func main() {
    h := gin.Default()
    h.Use(cors())
    h.POST("/api/authenticate", authenticate)
    h.POST("/api/secret", secret)
    h.Run()
}
func cors() gin.HandlerFunc {
    return func(c *gin.Context) {
        c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
        c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
        c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
        c.Writer.Header().Set("Access-Control-Expose-Headers", "Authorization")
        c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")
        if c.Request.Method == "OPTIONS" {
            c.AbortWithStatus(204)
            return
        }
        c.Next()
    }
}
type LoginRequest struct {
    Username string
    Password string
}
func authenticate(c *gin.Context) {
    var loginReq LoginRequest
    if err := c.BindJSON(&loginReq); err != nil {
        c.Error(err)
        c.Status(http.StatusBadRequest)
        return
    }
    fmt.Printf("username: %s\n", loginReq.Username)
    fmt.Printf("password: %s\n", loginReq.Password)
    c.Header("Authorization", "d34db33f")
    c.Status(http.StatusOK)
}
type SecretRequest struct {
    Message string
}
func secret(c *gin.Context) {
    var secretReq SecretRequest
    if err := c.BindJSON(&secretReq); err != nil {
        c.Error(err)
        c.Status(http.StatusBadRequest)
        return
    }
    authToken := c.Request.Header.Get("Authorization")
    fmt.Printf("Received auth token: %s\n", authToken)
    if strings.HasPrefix(authToken, "Bearer ") && strings.Split(authToken, " ")[1] == "d34db33f" {
        c.JSON(http.StatusOK, gin.H{"secret": "pickles"})
    } else {
        c.Status(http.StatusUnauthorized)
    }
}