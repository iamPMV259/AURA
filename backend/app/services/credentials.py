# app/services/credentials.py
from datetime import datetime
from typing import Any


def build_vc_stub(
    subject_wallet_id: int,
    issuer_id: int,
    title: str,
    description: str,
    extra: dict[str, Any],
) -> dict[str, Any]:
    """
    Minimal VC-like structure. Replace with real VC builder (DID, proofs, etc.)
    """
    return {
        "@context": ["https://www.w3.org/2018/credentials/v1"],
        "type": ["VerifiableCredential", "LearningCredential"],
        "issuer": f"did:aura:institution:{issuer_id}",
        "issuanceDate": datetime.utcnow().isoformat(),
        "credentialSubject": {
            "id": f"did:aura:wallet:{subject_wallet_id}",
            "title": title,
            "description": description,
            "extra": extra,
        },
        "proof": {
            "type": "Ed25519Signature2018",
            "created": datetime.utcnow().isoformat(),
            "proofPurpose": "assertionMethod",
            "verificationMethod": f"did:aura:institution:{issuer_id}#keys-1",
            "jws": "REPLACE_ME",
        },
    }
