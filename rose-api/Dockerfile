FROM amazoncorretto:17

WORKDIR /app
ADD build/libs/rose-api-0.0.1-SNAPSHOT.jar .
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "rose-api-0.0.1-SNAPSHOT.jar"]
