# Etapa de desarrollo: imagen SDK
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS dev
WORKDIR /src

# Copiamos los csproj primero para cachear restore
COPY *.csproj ./
RUN dotnet restore

# Resto del código
COPY . .

EXPOSE 5000
CMD ["dotnet", "watch", "run", "--urls", "http://0.0.0.0:5000"]
