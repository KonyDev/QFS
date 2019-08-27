#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
static void addProtocols()
{
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UITextAutocapitalizationTypeNone"] = @0;
	context[@"UITextAutocapitalizationTypeWords"] = @1;
	context[@"UITextAutocapitalizationTypeSentences"] = @2;
	context[@"UITextAutocapitalizationTypeAllCharacters"] = @3;

	context[@"UITextAutocorrectionTypeDefault"] = @0;
	context[@"UITextAutocorrectionTypeNo"] = @1;
	context[@"UITextAutocorrectionTypeYes"] = @2;

	context[@"UITextSpellCheckingTypeDefault"] = @0;
	context[@"UITextSpellCheckingTypeNo"] = @1;
	context[@"UITextSpellCheckingTypeYes"] = @2;

	context[@"UITextSmartQuotesTypeDefault"] = @0;
	context[@"UITextSmartQuotesTypeNo"] = @1;
	context[@"UITextSmartQuotesTypeYes"] = @2;

	context[@"UITextSmartDashesTypeDefault"] = @0;
	context[@"UITextSmartDashesTypeNo"] = @1;
	context[@"UITextSmartDashesTypeYes"] = @2;

	context[@"UITextSmartInsertDeleteTypeDefault"] = @0;
	context[@"UITextSmartInsertDeleteTypeNo"] = @1;
	context[@"UITextSmartInsertDeleteTypeYes"] = @2;

	context[@"UIKeyboardTypeDefault"] = @0;
	context[@"UIKeyboardTypeASCIICapable"] = @1;
	context[@"UIKeyboardTypeNumbersAndPunctuation"] = @2;
	context[@"UIKeyboardTypeURL"] = @3;
	context[@"UIKeyboardTypeNumberPad"] = @4;
	context[@"UIKeyboardTypePhonePad"] = @5;
	context[@"UIKeyboardTypeNamePhonePad"] = @6;
	context[@"UIKeyboardTypeEmailAddress"] = @7;
	context[@"UIKeyboardTypeDecimalPad"] = @8;
	context[@"UIKeyboardTypeTwitter"] = @9;
	context[@"UIKeyboardTypeWebSearch"] = @10;
	context[@"UIKeyboardTypeASCIICapableNumberPad"] = @11;
	context[@"UIKeyboardTypeAlphabet"] = @1;

	context[@"UIKeyboardAppearanceDefault"] = @0;
	context[@"UIKeyboardAppearanceDark"] = @1;
	context[@"UIKeyboardAppearanceLight"] = @2;
	context[@"UIKeyboardAppearanceAlert"] = @1;

	context[@"UIReturnKeyDefault"] = @0;
	context[@"UIReturnKeyGo"] = @1;
	context[@"UIReturnKeyGoogle"] = @2;
	context[@"UIReturnKeyJoin"] = @3;
	context[@"UIReturnKeyNext"] = @4;
	context[@"UIReturnKeyRoute"] = @5;
	context[@"UIReturnKeySearch"] = @6;
	context[@"UIReturnKeySend"] = @7;
	context[@"UIReturnKeyYahoo"] = @8;
	context[@"UIReturnKeyDone"] = @9;
	context[@"UIReturnKeyEmergencyCall"] = @10;
	context[@"UIReturnKeyContinue"] = @11;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &UITextContentTypeName;
	if (p != NULL) context[@"UITextContentTypeName"] = UITextContentTypeName;
	p = (void*) &UITextContentTypeJobTitle;
	if (p != NULL) context[@"UITextContentTypeJobTitle"] = UITextContentTypeJobTitle;
	p = (void*) &UITextContentTypeSublocality;
	if (p != NULL) context[@"UITextContentTypeSublocality"] = UITextContentTypeSublocality;
	p = (void*) &UITextContentTypePassword;
	if (p != NULL) context[@"UITextContentTypePassword"] = UITextContentTypePassword;
	p = (void*) &UITextContentTypeFamilyName;
	if (p != NULL) context[@"UITextContentTypeFamilyName"] = UITextContentTypeFamilyName;
	p = (void*) &UITextContentTypeNickname;
	if (p != NULL) context[@"UITextContentTypeNickname"] = UITextContentTypeNickname;
	p = (void*) &UITextContentTypeTelephoneNumber;
	if (p != NULL) context[@"UITextContentTypeTelephoneNumber"] = UITextContentTypeTelephoneNumber;
	p = (void*) &UITextContentTypeStreetAddressLine2;
	if (p != NULL) context[@"UITextContentTypeStreetAddressLine2"] = UITextContentTypeStreetAddressLine2;
	p = (void*) &UITextContentTypeStreetAddressLine1;
	if (p != NULL) context[@"UITextContentTypeStreetAddressLine1"] = UITextContentTypeStreetAddressLine1;
	p = (void*) &UITextContentTypeEmailAddress;
	if (p != NULL) context[@"UITextContentTypeEmailAddress"] = UITextContentTypeEmailAddress;
	p = (void*) &UITextContentTypeAddressCity;
	if (p != NULL) context[@"UITextContentTypeAddressCity"] = UITextContentTypeAddressCity;
	p = (void*) &UITextContentTypeCountryName;
	if (p != NULL) context[@"UITextContentTypeCountryName"] = UITextContentTypeCountryName;
	p = (void*) &UITextContentTypeAddressState;
	if (p != NULL) context[@"UITextContentTypeAddressState"] = UITextContentTypeAddressState;
	p = (void*) &UITextContentTypeCreditCardNumber;
	if (p != NULL) context[@"UITextContentTypeCreditCardNumber"] = UITextContentTypeCreditCardNumber;
	p = (void*) &UITextContentTypeGivenName;
	if (p != NULL) context[@"UITextContentTypeGivenName"] = UITextContentTypeGivenName;
	p = (void*) &UITextContentTypePostalCode;
	if (p != NULL) context[@"UITextContentTypePostalCode"] = UITextContentTypePostalCode;
	p = (void*) &UITextContentTypeURL;
	if (p != NULL) context[@"UITextContentTypeURL"] = UITextContentTypeURL;
	p = (void*) &UITextContentTypeMiddleName;
	if (p != NULL) context[@"UITextContentTypeMiddleName"] = UITextContentTypeMiddleName;
	p = (void*) &UITextContentTypeNameSuffix;
	if (p != NULL) context[@"UITextContentTypeNameSuffix"] = UITextContentTypeNameSuffix;
	p = (void*) &UITextContentTypeUsername;
	if (p != NULL) context[@"UITextContentTypeUsername"] = UITextContentTypeUsername;
	p = (void*) &UITextContentTypeNamePrefix;
	if (p != NULL) context[@"UITextContentTypeNamePrefix"] = UITextContentTypeNamePrefix;
	p = (void*) &UITextContentTypeFullStreetAddress;
	if (p != NULL) context[@"UITextContentTypeFullStreetAddress"] = UITextContentTypeFullStreetAddress;
	p = (void*) &UITextContentTypeAddressCityAndState;
	if (p != NULL) context[@"UITextContentTypeAddressCityAndState"] = UITextContentTypeAddressCityAndState;
	p = (void*) &UITextContentTypeLocation;
	if (p != NULL) context[@"UITextContentTypeLocation"] = UITextContentTypeLocation;
	p = (void*) &UITextContentTypeOrganizationName;
	if (p != NULL) context[@"UITextContentTypeOrganizationName"] = UITextContentTypeOrganizationName;
}
void UIKit_UITextInputTraitsProtocols()
{
	(void)@protocol(UITextInputTraits);
}
void load_UIKit_UITextInputTraits_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
