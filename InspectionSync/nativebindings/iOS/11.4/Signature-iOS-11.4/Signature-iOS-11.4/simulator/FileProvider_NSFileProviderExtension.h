#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_FileProvider_NSFileProviderExtension_symbols(JSContext*);
@protocol NSFileProviderExtensionInstanceExports<JSExport>
JSExportAs(startProvidingItemAtURLCompletionHandler,
-(void) jsstartProvidingItemAtURL: (NSURL *) url completionHandler: (JSValue *) completionHandler );
JSExportAs(itemForIdentifierError,
-(NSFileProviderItem) jsitemForIdentifier: (NSFileProviderItemIdentifier) identifier error: (JSValue *) error );
JSExportAs(providePlaceholderAtURLCompletionHandler,
-(void) jsprovidePlaceholderAtURL: (NSURL *) url completionHandler: (JSValue *) completionHandler );
-(NSURL *) URLForItemWithPersistentIdentifier: (NSFileProviderItemIdentifier) identifier ;
-(void) itemChangedAtURL: (NSURL *) url ;
-(void) stopProvidingItemAtURL: (NSURL *) url ;
-(NSFileProviderItemIdentifier) persistentIdentifierForItemAtURL: (NSURL *) url ;
@end
@protocol NSFileProviderExtensionClassExports<JSExport>
@end
@protocol NSFileProviderExtensionDeprecatedCategoryInstanceExports<JSExport>
@property (readonly,nonatomic) NSString * providerIdentifier;
@property (readonly,nonatomic) NSURL * documentStorageURL;
@end
@protocol NSFileProviderExtensionDeprecatedCategoryClassExports<JSExport>
+(NSURL *) placeholderURLForURL: (NSURL *) url ;
JSExportAs(writePlaceholderAtURLWithMetadataError,
+(BOOL) jswritePlaceholderAtURL: (NSURL *) placeholderURL withMetadata: (NSDictionary *) metadata error: (JSValue *) error );
@end
#pragma clang diagnostic pop