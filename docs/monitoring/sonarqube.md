# Sonarqube

Sonarqube will show metrics on code quality and test coverage.

## How to run locally

- Install Docker on your machine.
- Download Sonarqube `docker pull sonarqube`.
- Run Sonarqube instance `docker run -d --name sonarqube -p 9000:9000 sonarqube`.
- Navigate to `http://localhost:9000`.
- The default username and password is *admin admin*.
- To visualize the coverage results it's necessary to change some information in `sonar-project.properties`, which is:
  
  1 - Add `sonar.login=your_token`. To generate your token, go to [account settings page](http://localhost:9000/account/security). In generate tokens insert a name for the token and then click in *Generate*.
  2 - Add `sonar.host.url=http://localhost:9000`.

To generate the reports run the following commands:
- Run `npm run test`.
- Run `npm run sonar`.

Navigate to `http://localhost:9000` and you will be able to see the reports.
