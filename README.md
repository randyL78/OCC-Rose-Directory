# OCC Rose Directory

[![pipeline status](https://gitlab.com/randydavidl78/occ-rose-directory/badges/main/pipeline.svg)](https://gitlab.com/randydavidl78/occ-rose-directory/-/commits/main)

[![Latest Release](https://gitlab.com/randydavidl78/occ-rose-directory/-/badges/release.svg)](https://gitlab.com/randydavidl78/occ-rose-directory/-/releases)

[OCC Rose Directory](https://rosedirectory.geminionestop.com)

[OCC Rose Directory Staging](https://stagingrosedirectory.geminionestop.com)

A resource on the roses sold by Old City Cemetery in Lynchburg, VA at their
annual Rose Festival Sale. It will provide a detailed description, history,
and care instructions. Additionally, it will give indicators for it's color
and fragrance. The festival also sells rose companion plants, and the same information will
be provided for each of those as well.

Ideally, a QR code generation and scanning system will be added so that users
can scan the code with a mobile device and be navigated directly to the page
for that specific plant.

## Path to MVP

- [X] Create static rose description page
- [X] Deploy client to S3
- [X] Add Cloudfront to deliver client from S3
- [X] Add in-app data to client to make rose description page dynamic
- [X] Add basic home page
- [X] Add basic rose list page
- [X] Deploy hello-world version of API to ECS
- [ ] Add static rose detail endpoint to API
- [ ] Add static rose list endpoint to API
- [ ] Add an in-app data repository to API and connect resources to it
- [ ] Convert in-app data to a file store to facilitate building out Admin functionality
- [ ] Add login page to client for Admins
- [ ] Add login, logout, and authenticated endpoints to API
- [ ] Convert file store to NoSql DB

