# React
FROM node:alpine AS node_builder
COPY --from=builder /app/client ./
RUN npm install
RUN npm run build

# $docker build -t ditto-react .

# # Production
# FROM alpine:latest
# RUN apk --no-cache add ca-certificates
# COPY --from=go_builder /main ./
# COPY --from=node_builder /build ./web
# RUN chmod +x ./main
# EXPOSE 8080
# CMD ./main