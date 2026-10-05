# test to demonstrate that changing file causes cache to be invalidated

docker docs are sparse in that regard, stating that:
> For the ADD and COPY instructions, and for RUN instructions with bind mounts (RUN --mount=type=bind), 
> the builder calculates a cache checksum from file metadata to determine whether cache is valid. (...)
But they 
- don't elaborate about what "metadata" actually includes
- add a mystical statement:
  > The modification time of a file (mtime) is not taken into account when calculating the cache checksum.

[docker docs](https://docs.docker.com/build/cache/invalidation/#general-rules)


Tests included here demonstrate that modifying file contents causes cache invalidation.
They print `stat` comparison of file between two builds.
Also **file size is the same** between the two builds.

## conclusion / guess
According to stat, metadata that changed was both "modify" and "change".
So podman is either
- using "change"
- comparing contents
- actually using "modify"

Change was simulated by `>` bash redirection, which preserved "Birth" time (create time) on my machine at least.