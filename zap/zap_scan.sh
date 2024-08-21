# Start ZAP in daemon mode
docker run -u root --name zap -p 8080:8080 -d zaproxy/zap-stable zap.sh -daemon -port 8080 -host 0.0.0.0

# Give ZAP time to start
sleep 20

# Run a ZAP scan against your deployed app on CloudFront
docker run -u root -v $(pwd)/zap:/zap/wrk/:rw --network="host" zaproxy/zap-stable zap-full-scan.py --self-contained --start-options '-config api.disablekey=true' -r scan_report.html -t https://zaproxy.org/

# Copy the report
# docker cp $(docker ps -q -f "ancestor=owasp/zap2docker-stable"):/zap/wrk/scan_report.html .

# Optionally fail the build if the scan finds critical vulnerabilities
# docker run -u root -v $(pwd)/zap:/zap/wrk/:rw --network="host" zaproxy/zap-stable zap-full-scan.py --self-contained --start-options '-config api.disablekey=true' -r scan_report.html -t https://zaproxy.org/ --exit-code False