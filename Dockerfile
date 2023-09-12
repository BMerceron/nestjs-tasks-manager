# Use the latest official postgresql image
FROM postgres:latest

# DB params for local development
ENV POSTGRES_DB=task-management
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres

# Use envs params or secrets for production