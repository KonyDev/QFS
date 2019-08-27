#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_CoreImage_CIBarcodeDescriptor_symbols(JSContext*);
@protocol CIPDF417CodeDescriptorInstanceExports<JSExport>
@property (readonly) NSInteger columnCount;
@property (readonly) NSInteger rowCount;
@property (readonly) NSData * errorCorrectedPayload;
@property (readonly) BOOL isCompact;
JSExportAs(initWithPayloadIsCompactRowCountColumnCount,
-(id) jsinitWithPayload: (NSData *) errorCorrectedPayload isCompact: (BOOL) isCompact rowCount: (NSInteger) rowCount columnCount: (NSInteger) columnCount );
@end
@protocol CIPDF417CodeDescriptorClassExports<JSExport>
+(id) descriptorWithPayload: (NSData *) errorCorrectedPayload isCompact: (BOOL) isCompact rowCount: (NSInteger) rowCount columnCount: (NSInteger) columnCount ;
@end
@protocol CIDataMatrixCodeDescriptorInstanceExports<JSExport>
@property (readonly) NSInteger columnCount;
@property (readonly) NSInteger rowCount;
@property (readonly) NSData * errorCorrectedPayload;
@property (readonly) CIDataMatrixCodeECCVersion eccVersion;
JSExportAs(initWithPayloadRowCountColumnCountEccVersion,
-(id) jsinitWithPayload: (NSData *) errorCorrectedPayload rowCount: (NSInteger) rowCount columnCount: (NSInteger) columnCount eccVersion: (CIDataMatrixCodeECCVersion) eccVersion );
@end
@protocol CIDataMatrixCodeDescriptorClassExports<JSExport>
+(id) descriptorWithPayload: (NSData *) errorCorrectedPayload rowCount: (NSInteger) rowCount columnCount: (NSInteger) columnCount eccVersion: (CIDataMatrixCodeECCVersion) eccVersion ;
@end
@protocol NSUserActivityCIBarcodeDescriptorCategoryInstanceExports<JSExport>
@property (readonly,copy,nonatomic) CIBarcodeDescriptor * detectedBarcodeDescriptor;
@end
@protocol NSUserActivityCIBarcodeDescriptorCategoryClassExports<JSExport>
@end
@protocol CIAztecCodeDescriptorInstanceExports<JSExport>
@property (readonly) NSData * errorCorrectedPayload;
@property (readonly) NSInteger layerCount;
@property (readonly) BOOL isCompact;
@property (readonly) NSInteger dataCodewordCount;
JSExportAs(initWithPayloadIsCompactLayerCountDataCodewordCount,
-(id) jsinitWithPayload: (NSData *) errorCorrectedPayload isCompact: (BOOL) isCompact layerCount: (NSInteger) layerCount dataCodewordCount: (NSInteger) dataCodewordCount );
@end
@protocol CIAztecCodeDescriptorClassExports<JSExport>
+(id) descriptorWithPayload: (NSData *) errorCorrectedPayload isCompact: (BOOL) isCompact layerCount: (NSInteger) layerCount dataCodewordCount: (NSInteger) dataCodewordCount ;
@end
@protocol CIBarcodeDescriptorInstanceExports<JSExport, NSSecureCodingInstanceExports_, NSCopyingInstanceExports_>
@end
@protocol CIBarcodeDescriptorClassExports<JSExport, NSSecureCodingClassExports_, NSCopyingClassExports_>
@end
@protocol CIQRCodeDescriptorInstanceExports<JSExport>
@property (readonly) NSData * errorCorrectedPayload;
@property (readonly) CIQRCodeErrorCorrectionLevel errorCorrectionLevel;
@property (readonly) NSInteger symbolVersion;
@property (readonly) uint8_t maskPattern;
JSExportAs(initWithPayloadSymbolVersionMaskPatternErrorCorrectionLevel,
-(id) jsinitWithPayload: (NSData *) errorCorrectedPayload symbolVersion: (NSInteger) symbolVersion maskPattern: (uint8_t) maskPattern errorCorrectionLevel: (CIQRCodeErrorCorrectionLevel) errorCorrectionLevel );
@end
@protocol CIQRCodeDescriptorClassExports<JSExport>
+(id) descriptorWithPayload: (NSData *) errorCorrectedPayload symbolVersion: (NSInteger) symbolVersion maskPattern: (uint8_t) maskPattern errorCorrectionLevel: (CIQRCodeErrorCorrectionLevel) errorCorrectionLevel ;
@end
#pragma clang diagnostic pop