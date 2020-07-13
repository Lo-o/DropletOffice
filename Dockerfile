FROM hayd/alpine-deno:1.0.1

USER deno

ADD . .
RUN deno cache server.ts

CMD ["run" "--allow-env" "--allow-net" "--allow-read" "server.ts"]