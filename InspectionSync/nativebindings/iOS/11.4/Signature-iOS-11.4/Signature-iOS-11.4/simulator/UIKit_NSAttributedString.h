#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_NSAttributedString_symbols(JSContext*);
@protocol NSAttributedStringNSAttributedStringDocumentFormatsCategoryInstanceExports<JSExport>
JSExportAs(fileWrapperFromRangeDocumentAttributesError,
-(NSFileWrapper *) jsfileWrapperFromRange: (NSRange) range documentAttributes: (NSDictionary *) dict error: (JSValue *) error );
JSExportAs(dataFromRangeDocumentAttributesError,
-(NSData *) jsdataFromRange: (NSRange) range documentAttributes: (NSDictionary *) dict error: (JSValue *) error );
@end
@protocol NSAttributedStringNSAttributedStringDocumentFormatsCategoryClassExports<JSExport>
@end
@protocol NSMutableAttributedStringNSAttributedStringAttributeFixingCategoryInstanceExports<JSExport>
-(void) fixAttributesInRange: (NSRange) range ;
@end
@protocol NSMutableAttributedStringNSAttributedStringAttributeFixingCategoryClassExports<JSExport>
@end
@protocol NSAttributedStringNSAttributedStringKitAdditionsCategoryInstanceExports<JSExport>
-(BOOL) containsAttachmentsInRange: (NSRange) range ;
@end
@protocol NSAttributedStringNSAttributedStringKitAdditionsCategoryClassExports<JSExport>
@end
@protocol NSMutableAttributedStringNSDeprecatedKitAdditionsCategoryInstanceExports<JSExport>
@end
@protocol NSMutableAttributedStringNSDeprecatedKitAdditionsCategoryClassExports<JSExport>
@end
@protocol NSAttributedStringNSDeprecatedKitAdditionsCategoryInstanceExports<JSExport>
@end
@protocol NSAttributedStringNSDeprecatedKitAdditionsCategoryClassExports<JSExport>
@end
@protocol NSMutableAttributedStringNSMutableAttributedStringDocumentFormatsCategoryInstanceExports<JSExport>
@end
@protocol NSMutableAttributedStringNSMutableAttributedStringDocumentFormatsCategoryClassExports<JSExport>
@end
@protocol NSAttributedStringUINSItemProviderCategoryInstanceExports<JSExport, NSItemProviderReadingInstanceExports_, NSItemProviderWritingInstanceExports_>
@end
@protocol NSAttributedStringUINSItemProviderCategoryClassExports<JSExport, NSItemProviderReadingClassExports_, NSItemProviderWritingClassExports_>
@end
#pragma clang diagnostic pop