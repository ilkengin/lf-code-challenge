FROM openjdk:8-jre-alpine
ADD build/libs/lf-code-challenge-*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
EXPOSE 8080