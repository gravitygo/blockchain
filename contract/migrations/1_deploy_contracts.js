const SkillCertificateRegistry = artifacts.require('SkillCertificateRegistry');

module.exports = function (deployer) {
    deployer.deploy(SkillCertificateRegistry);
};
