#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIManagedDocument_symbols(JSContext*);
@protocol UIManagedDocumentInstanceExports<JSExport>
@property (copy,nonatomic) NSString * modelConfiguration;
@property (readonly,nonatomic,strong) NSManagedObjectModel * managedObjectModel;
@property (copy,nonatomic) NSDictionary * persistentStoreOptions;
@property (readonly,nonatomic,strong) NSManagedObjectContext * managedObjectContext;
JSExportAs(readAdditionalContentFromURLError,
-(BOOL) jsreadAdditionalContentFromURL: (NSURL *) absoluteURL error: (JSValue *) error );
JSExportAs(configurePersistentStoreCoordinatorForURLOfTypeModelConfigurationStoreOptionsError,
-(BOOL) jsconfigurePersistentStoreCoordinatorForURL: (NSURL *) storeURL ofType: (NSString *) fileType modelConfiguration: (NSString *) configuration storeOptions: (NSDictionary *) storeOptions error: (JSValue *) error );
-(NSString *) persistentStoreTypeForFileType: (NSString *) fileType ;
JSExportAs(additionalContentForURLError,
-(id) jsadditionalContentForURL: (NSURL *) absoluteURL error: (JSValue *) error );
JSExportAs(writeAdditionalContentToURLOriginalContentsURLError,
-(BOOL) jswriteAdditionalContent: (id) content toURL: (NSURL *) absoluteURL originalContentsURL: (NSURL *) absoluteOriginalContentsURL error: (JSValue *) error );
@end
@protocol UIManagedDocumentClassExports<JSExport>
+(NSString *) persistentStoreName;
@end
#pragma clang diagnostic pop