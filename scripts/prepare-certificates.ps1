# Render derivatives; user-supplied originals are copied byte-for-byte, never edited.
param([Parameter(Mandatory=$true)][string]$SourceDirectory)
$certificateInputs = @(
  @('phd','Диплом Доктора PhD Сысоев.pdf'),
  @('ethical-hacking','Ethical Hacker Syssoyev Askar.pdf'),
  @('investigation','Расследование преступлений в сфере высоких технологий.pdf'),
  @('communication','Advanced Level Communication Technologies and Applications.pdf'),
  @('ord','Современные проблемы теории и практики ОРД.pdf'),
  @('ai','Искусственный Интеллект (ИИ) для всех Сысоев А.К..pdf'),
  @('digital-learning','Цифровая трансформация в образовании Интерактивный контент и платформы обучения.pdf'),
  @('blended-learning','Blended Learning Personalizing Education for Students Syssoyev Askar.pdf'),
  @('disability-inclusion','Disability Inclusion in Education Building Systems of Support Syssoyev A.K..pdf'),
  @('diversity','Diversity and inclusion in the workplace Syssoyev A.K..pdf'),
  @('managing-diversity','Managing Diversity in a Multicultural Workplace Syssoyev A.K..pdf')
)
New-Item -ItemType Directory -Force public/certificates,tmp/certificates | Out-Null
foreach($certificateInput in $certificateInputs) {
  $certificateSource = Join-Path $SourceDirectory $certificateInput[1]
  if(-not (Test-Path -LiteralPath $certificateSource)) { throw "Missing certificate: $certificateSource" }
  Copy-Item -LiteralPath $certificateSource -Destination "public/certificates/$($certificateInput[0]).pdf"
  & pdftoppm -f 1 -singlefile -scale-to 1800 -png $certificateSource "tmp/certificates/$($certificateInput[0])"
  if($LASTEXITCODE -ne 0) { throw "Render failed: $certificateSource" }
}
