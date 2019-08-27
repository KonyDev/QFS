#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIApplicationShortcutItem (Exports)
-(id) jsinitWithType: (NSString *) type localizedTitle: (NSString *) localizedTitle 
{
	id resultVal__;
	resultVal__ = [[self initWithType: type localizedTitle: localizedTitle ] autorelease];
	return resultVal__;
}
-(id) jsinitWithType: (NSString *) type localizedTitle: (NSString *) localizedTitle localizedSubtitle: (NSString *) localizedSubtitle icon: (UIApplicationShortcutIcon *) icon userInfo: (NSDictionary *) userInfo 
{
	id resultVal__;
	resultVal__ = [[self initWithType: type localizedTitle: localizedTitle localizedSubtitle: localizedSubtitle icon: icon userInfo: userInfo ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UIApplicationShortcutItem class], @protocol(UIApplicationShortcutItemInstanceExports));
	class_addProtocol([UIApplicationShortcutItem class], @protocol(UIApplicationShortcutItemClassExports));
	class_addProtocol([UIApplicationShortcutIcon class], @protocol(UIApplicationShortcutIconInstanceExports));
	class_addProtocol([UIApplicationShortcutIcon class], @protocol(UIApplicationShortcutIconClassExports));
	class_addProtocol([UIMutableApplicationShortcutItem class], @protocol(UIMutableApplicationShortcutItemInstanceExports));
	class_addProtocol([UIMutableApplicationShortcutItem class], @protocol(UIMutableApplicationShortcutItemClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIApplicationShortcutIconTypeCompose"] = @0;
	context[@"UIApplicationShortcutIconTypePlay"] = @1;
	context[@"UIApplicationShortcutIconTypePause"] = @2;
	context[@"UIApplicationShortcutIconTypeAdd"] = @3;
	context[@"UIApplicationShortcutIconTypeLocation"] = @4;
	context[@"UIApplicationShortcutIconTypeSearch"] = @5;
	context[@"UIApplicationShortcutIconTypeShare"] = @6;
	context[@"UIApplicationShortcutIconTypeProhibit"] = @7;
	context[@"UIApplicationShortcutIconTypeContact"] = @8;
	context[@"UIApplicationShortcutIconTypeHome"] = @9;
	context[@"UIApplicationShortcutIconTypeMarkLocation"] = @10;
	context[@"UIApplicationShortcutIconTypeFavorite"] = @11;
	context[@"UIApplicationShortcutIconTypeLove"] = @12;
	context[@"UIApplicationShortcutIconTypeCloud"] = @13;
	context[@"UIApplicationShortcutIconTypeInvitation"] = @14;
	context[@"UIApplicationShortcutIconTypeConfirmation"] = @15;
	context[@"UIApplicationShortcutIconTypeMail"] = @16;
	context[@"UIApplicationShortcutIconTypeMessage"] = @17;
	context[@"UIApplicationShortcutIconTypeDate"] = @18;
	context[@"UIApplicationShortcutIconTypeTime"] = @19;
	context[@"UIApplicationShortcutIconTypeCapturePhoto"] = @20;
	context[@"UIApplicationShortcutIconTypeCaptureVideo"] = @21;
	context[@"UIApplicationShortcutIconTypeTask"] = @22;
	context[@"UIApplicationShortcutIconTypeTaskCompleted"] = @23;
	context[@"UIApplicationShortcutIconTypeAlarm"] = @24;
	context[@"UIApplicationShortcutIconTypeBookmark"] = @25;
	context[@"UIApplicationShortcutIconTypeShuffle"] = @26;
	context[@"UIApplicationShortcutIconTypeAudio"] = @27;
	context[@"UIApplicationShortcutIconTypeUpdate"] = @28;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_UIKit_UIApplicationShortcutItem_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
