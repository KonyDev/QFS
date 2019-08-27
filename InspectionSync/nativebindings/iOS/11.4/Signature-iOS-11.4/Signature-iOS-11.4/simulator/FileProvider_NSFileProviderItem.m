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
	context[@"NSFileProviderItemCapabilitiesAllowsReading"] = @1UL;
	context[@"NSFileProviderItemCapabilitiesAllowsWriting"] = @2UL;
	context[@"NSFileProviderItemCapabilitiesAllowsReparenting"] = @4UL;
	context[@"NSFileProviderItemCapabilitiesAllowsRenaming"] = @8UL;
	context[@"NSFileProviderItemCapabilitiesAllowsTrashing"] = @16UL;
	context[@"NSFileProviderItemCapabilitiesAllowsDeleting"] = @32UL;
	context[@"NSFileProviderItemCapabilitiesAllowsAddingSubItems"] = @2UL;
	context[@"NSFileProviderItemCapabilitiesAllowsContentEnumerating"] = @1UL;
	context[@"NSFileProviderItemCapabilitiesAllowsAll"] = @63UL;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &NSFileProviderRootContainerItemIdentifier;
	if (p != NULL) context[@"NSFileProviderRootContainerItemIdentifier"] = NSFileProviderRootContainerItemIdentifier;
	p = (void*) &NSFileProviderFavoriteRankUnranked;
	if (p != NULL) context[@"NSFileProviderFavoriteRankUnranked"] = @(NSFileProviderFavoriteRankUnranked);
	p = (void*) &NSFileProviderWorkingSetContainerItemIdentifier;
	if (p != NULL) context[@"NSFileProviderWorkingSetContainerItemIdentifier"] = NSFileProviderWorkingSetContainerItemIdentifier;
}
void FileProvider_NSFileProviderItemProtocols()
{
	(void)@protocol(NSFileProviderItem);
}
void load_FileProvider_NSFileProviderItem_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
