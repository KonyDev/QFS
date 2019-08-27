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
	context[@"UITextAutocapitalizationTypeNone"] = @0L;
	context[@"UITextAutocapitalizationTypeWords"] = @1L;
	context[@"UITextAutocapitalizationTypeSentences"] = @2L;
	context[@"UITextAutocapitalizationTypeAllCharacters"] = @3L;

	context[@"UITextAutocorrectionTypeDefault"] = @0L;
	context[@"UITextAutocorrectionTypeNo"] = @1L;
	context[@"UITextAutocorrectionTypeYes"] = @2L;

	context[@"UITextSpellCheckingTypeDefault"] = @0L;
	context[@"UITextSpellCheckingTypeNo"] = @1L;
	context[@"UITextSpellCheckingTypeYes"] = @2L;

	context[@"UITextSmartQuotesTypeDefault"] = @0L;
	context[@"UITextSmartQuotesTypeNo"] = @1L;
	context[@"UITextSmartQuotesTypeYes"] = @2L;

	context[@"UITextSmartDashesTypeDefault"] = @0L;
	context[@"UITextSmartDashesTypeNo"] = @1L;
	context[@"UITextSmartDashesTypeYes"] = @2L;

	context[@"UITextSmartInsertDeleteTypeDefault"] = @0L;
	context[@"UITextSmartInsertDeleteTypeNo"] = @1L;
	context[@"UITextSmartInsertDeleteTypeYes"] = @2L;

	context[@"UIKeyboardTypeDefault"] = @0L;
	context[@"UIKeyboardTypeASCIICapable"] = @1L;
	context[@"UIKeyboardTypeNumbersAndPunctuation"] = @2L;
	context[@"UIKeyboardTypeURL"] = @3L;
	context[@"UIKeyboardTypeNumberPad"] = @4L;
	context[@"UIKeyboardTypePhonePad"] = @5L;
	context[@"UIKeyboardTypeNamePhonePad"] = @6L;
	context[@"UIKeyboardTypeEmailAddress"] = @7L;
	context[@"UIKeyboardTypeDecimalPad"] = @8L;
	context[@"UIKeyboardTypeTwitter"] = @9L;
	context[@"UIKeyboardTypeWebSearch"] = @10L;
	context[@"UIKeyboardTypeASCIICapableNumberPad"] = @11L;
	context[@"UIKeyboardTypeAlphabet"] = @1L;

	context[@"UIKeyboardAppearanceDefault"] = @0L;
	context[@"UIKeyboardAppearanceDark"] = @1L;
	context[@"UIKeyboardAppearanceLight"] = @2L;
	context[@"UIKeyboardAppearanceAlert"] = @1L;

	context[@"UIReturnKeyDefault"] = @0L;
	context[@"UIReturnKeyGo"] = @1L;
	context[@"UIReturnKeyGoogle"] = @2L;
	context[@"UIReturnKeyJoin"] = @3L;
	context[@"UIReturnKeyNext"] = @4L;
	context[@"UIReturnKeyRoute"] = @5L;
	context[@"UIReturnKeySearch"] = @6L;
	context[@"UIReturnKeySend"] = @7L;
	context[@"UIReturnKeyYahoo"] = @8L;
	context[@"UIReturnKeyDone"] = @9L;
	context[@"UIReturnKeyEmergencyCall"] = @10L;
	context[@"UIReturnKeyContinue"] = @11L;

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
