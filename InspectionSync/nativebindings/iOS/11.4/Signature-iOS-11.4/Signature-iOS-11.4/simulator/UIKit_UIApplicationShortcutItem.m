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
	context[@"UIApplicationShortcutIconTypeCompose"] = @0L;
	context[@"UIApplicationShortcutIconTypePlay"] = @1L;
	context[@"UIApplicationShortcutIconTypePause"] = @2L;
	context[@"UIApplicationShortcutIconTypeAdd"] = @3L;
	context[@"UIApplicationShortcutIconTypeLocation"] = @4L;
	context[@"UIApplicationShortcutIconTypeSearch"] = @5L;
	context[@"UIApplicationShortcutIconTypeShare"] = @6L;
	context[@"UIApplicationShortcutIconTypeProhibit"] = @7L;
	context[@"UIApplicationShortcutIconTypeContact"] = @8L;
	context[@"UIApplicationShortcutIconTypeHome"] = @9L;
	context[@"UIApplicationShortcutIconTypeMarkLocation"] = @10L;
	context[@"UIApplicationShortcutIconTypeFavorite"] = @11L;
	context[@"UIApplicationShortcutIconTypeLove"] = @12L;
	context[@"UIApplicationShortcutIconTypeCloud"] = @13L;
	context[@"UIApplicationShortcutIconTypeInvitation"] = @14L;
	context[@"UIApplicationShortcutIconTypeConfirmation"] = @15L;
	context[@"UIApplicationShortcutIconTypeMail"] = @16L;
	context[@"UIApplicationShortcutIconTypeMessage"] = @17L;
	context[@"UIApplicationShortcutIconTypeDate"] = @18L;
	context[@"UIApplicationShortcutIconTypeTime"] = @19L;
	context[@"UIApplicationShortcutIconTypeCapturePhoto"] = @20L;
	context[@"UIApplicationShortcutIconTypeCaptureVideo"] = @21L;
	context[@"UIApplicationShortcutIconTypeTask"] = @22L;
	context[@"UIApplicationShortcutIconTypeTaskCompleted"] = @23L;
	context[@"UIApplicationShortcutIconTypeAlarm"] = @24L;
	context[@"UIApplicationShortcutIconTypeBookmark"] = @25L;
	context[@"UIApplicationShortcutIconTypeShuffle"] = @26L;
	context[@"UIApplicationShortcutIconTypeAudio"] = @27L;
	context[@"UIApplicationShortcutIconTypeUpdate"] = @28L;

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
