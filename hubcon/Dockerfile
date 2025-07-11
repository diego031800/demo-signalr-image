FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /src
COPY Program.cs .
EXPOSE 5000
ENTRYPOINT ["dotnet","run","--urls","http://0.0.0.0:5000"]
